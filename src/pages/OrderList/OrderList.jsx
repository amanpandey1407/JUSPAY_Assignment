import React, { useState, useRef, useEffect } from "react";
import "./Orders.css";
import {
  FaPlus,
  FaFilter,
  FaSortUp,
  FaSortDown,
  FaSearch,
  FaEllipsisH,
} from "react-icons/fa";
import { MOCK_ORDERS } from "../../data/ordersData";
import { getStatusColor } from "../../utils/statusColorUtils";
import { SlCalender } from "react-icons/sl";

function Orders() {
  const [orders] = useState(MOCK_ORDERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedOrderIds, setSelectedOrderIds] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({ status: new Set() });

  const sortDialogRef = useRef(null);
  const filterDialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortDialogRef.current &&
        !sortDialogRef.current.contains(event.target)
      ) {
        setIsSortDialogOpen(false);
      }
      if (
        filterDialogRef.current &&
        !filterDialogRef.current.contains(event.target)
      ) {
        setIsFilterDialogOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortDialogOpen, isFilterDialogOpen]);

  const uniqueStatuses = Array.from(
    new Set(orders.map((order) => order.status))
  );

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const filterSet = new Set(newFilters[filterType]);
      if (filterSet.has(value)) {
        filterSet.delete(value);
      } else {
        filterSet.add(value);
      }
      newFilters[filterType] = filterSet;
      return newFilters;
    });
    setCurrentPage(1);
  };

  const filteredOrders = orders.filter((order) => {
    const searchTermMatch = Object.values(order).some((value) => {
      if (typeof value === "object" && value !== null && value.name) {
        return String(value.name)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      return String(value).toLowerCase().includes(searchTerm.toLowerCase());
    });
    const statusMatch =
      activeFilters.status.size === 0 || activeFilters.status.has(order.status);
    return searchTermMatch && statusMatch;
  });

  const filteredAndSortedOrders = [...filteredOrders].sort((a, b) => {
    let aValue, bValue;
    if (sortBy === "user") {
      aValue = a.user.name;
      bValue = b.user.name;
    } else {
      aValue = a[sortBy];
      bValue = b[sortBy];
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedOrders.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedIds = new Set(currentItems.map((n) => n.id));
      setSelectedOrderIds(newSelectedIds);
      return;
    }
    setSelectedOrderIds(new Set());
  };

  const handleCheckboxClick = (event, id) => {
    const newSelected = new Set(selectedOrderIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedOrderIds(newSelected);
  };

  const isSelected = (id) => selectedOrderIds.has(id);

  const handleDialogSort = (column, order) => {
    setSortBy(column);
    setSortOrder(order);
    setCurrentPage(1);
    setIsSortDialogOpen(false);
  };

  const handleHeaderSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    pageNumbers.push(
      <button
        key="prev"
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="page-button"
      >
        &lt;
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`page-button ${currentPage === i ? "active-page" : ""}`}
        >
          {i}
        </button>
      );
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="page-button"
      >
        &gt;
      </button>
    );

    return pageNumbers;
  };

  const columns = [
    { key: "id", name: "Order ID" },
    { key: "user", name: "User" },
    { key: "project", name: "Project" },
    { key: "address", name: "Address" },
    { key: "date", name: "Date" },
    { key: "status", name: "Status" },
  ];

  return (
    <div className="orders-card">
      <div className="orders-list-title">Order List</div>
      <div className="orders-toolbar">
        <div className="toolbar-actions">
          <button className="toolbar-button">
            <FaPlus />
          </button>
          <div className="filter-button-container">
            <button
              className="toolbar-button"
              onClick={() => setIsFilterDialogOpen(!isFilterDialogOpen)}
            >
              <FaFilter />
            </button>
            {isFilterDialogOpen && (
              <div className="filter-dialog" ref={filterDialogRef}>
                <div className="filter-section">
                  <div className="filter-section-title">Status</div>
                  <div className="filter-options">
                    {uniqueStatuses.map((status) => (
                      <div
                        key={status}
                        className={`filter-option ${
                          activeFilters.status.has(status) ? "selected" : ""
                        }`}
                        onClick={() => handleFilterChange("status", status)}
                      >
                        <span
                          className="status-dot"
                          style={{ backgroundColor: getStatusColor(status) }}
                        ></span>
                        {status}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sort-button-container">
            <button
              className="toolbar-button"
              onClick={() => setIsSortDialogOpen(!isSortDialogOpen)}
            >
              <FaSortUp />
              <FaSortDown />
            </button>
            {isSortDialogOpen && (
              <div className="sort-dialog" ref={sortDialogRef}>
                <div className="sort-options-section">
                  <div
                    className={`sort-option ${
                      sortOrder === "asc" ? "selected" : ""
                    }`}
                    onClick={() => handleDialogSort(sortBy, "asc")}
                  >
                    Ascending
                  </div>
                  <div
                    className={`sort-option ${
                      sortOrder === "desc" ? "selected" : ""
                    }`}
                    onClick={() => handleDialogSort(sortBy, "desc")}
                  >
                    Descending
                  </div>
                </div>
                <div className="column-options-section">
                  {columns.map((column) => (
                    <div
                      key={column.key}
                      className={`column-option ${
                        sortBy === column.key ? "selected" : ""
                      }`}
                      onClick={() => handleDialogSort(column.key, sortOrder)}
                    >
                      {column.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="toolbar-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
      <div className="orders-table-container">
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input
                  type="checkbox"
                  onChange={handleSelectAllClick}
                  checked={
                    selectedOrderIds.size === currentItems.length &&
                    currentItems.length > 0
                  }
                  ref={(el) => {
                    if (el) {
                      el.indeterminate =
                        selectedOrderIds.size > 0 &&
                        selectedOrderIds.size < currentItems.length;
                    }
                  }}
                />
              </th>
              <th onClick={() => handleHeaderSort("id")}>Order ID</th>
              <th onClick={() => handleHeaderSort("user")}>User</th>
              <th onClick={() => handleHeaderSort("project")}>Project</th>
              <th onClick={() => handleHeaderSort("address")}>Address</th>
              <th onClick={() => handleHeaderSort("date")}>Date</th>
              <th onClick={() => handleHeaderSort("status")}>Status</th>
              <th className="action-cell"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((order) => (
                <tr
                  key={order.id}
                  className={isSelected(order.id) ? "selected-row" : ""}
                >
                  <td className="checkbox-cell">
                    <input
                      type="checkbox"
                      checked={isSelected(order.id)}
                      onChange={(event) => handleCheckboxClick(event, order.id)}
                    />
                  </td>
                  <td>{order.id}</td>
                  <td>
                    <div className="user-info">
                      <span>{order.user.name}</span>
                    </div>
                  </td>
                  <td>{order.project}</td>
                  <td>{order.address}</td>
                  <td className="date-cell">
                    <SlCalender /> {order.date}
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ color: getStatusColor(order.status) }}
                    >
                      <span
                        className="status-dot"
                        style={{
                          backgroundColor: getStatusColor(order.status),
                        }}
                      ></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="ellipsis-button">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">{renderPageNumbers()}</div>
    </div>
  );
}

export default Orders;
