import React, { useEffect, useState } from "react";
import { Mail, Clock, Trash2, Phone } from "lucide-react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [sortedMessages, setSortedMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortOption, setSortOption] = useState("latest");
  const [selectedMessages, setSelectedMessages] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    applySort();
  }, [sortOption, messages]);

  // ✅ Load Messages from API
  const loadMessages = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://backend-the-namratagreen-foundation.vercel.app/api/v1/getContactUsData"
      );

      const result = await res.json();

      if (result?.data) {
        setMessages(result.data);
      } else {
        setMessages([]);
      }
    } catch (error) {
      console.log("Error loading messages:", error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Apply Sort
  const applySort = () => {
    let temp = [...messages];

    if (sortOption === "latest") {
      temp = temp.reverse();
    }

    setSortedMessages(temp);
  };

  // ✅ Select Single Message
  const handleSelect = (id) => {
    if (selectedMessages.includes(id)) {
      setSelectedMessages(selectedMessages.filter((item) => item !== id));
    } else {
      setSelectedMessages([...selectedMessages, id]);
    }
  };

  // ✅ Select All / Unselect All
  const handleSelectAll = () => {
    if (selectedMessages.length === sortedMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(sortedMessages.map((msg) => msg.id));
    }
  };

  // ✅ Delete Single Message
  const handleDeleteSingle = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://backend-the-namratagreen-foundation.vercel.app/api/v1/contactus/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await res.json();
      console.log("Single Delete Response:", result);

      alert("Message Deleted Successfully ✅");

      loadMessages();
      setSelectedMessages((prev) => prev.filter((item) => item !== id));
    } catch (error) {
      console.log("Delete Error:", error);
      alert("Failed to delete message ❌");
    }
  };

  // ✅ Delete Selected Messages (Bulk API)
  const handleDeleteSelected = async () => {
    if (selectedMessages.length === 0) {
      alert("Please select at least 1 message ❌");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedMessages.length} selected messages?`
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        "https://backend-the-namratagreen-foundation.vercel.app/api/v1/contactus",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ids: selectedMessages,
          }),
        }
      );

      const result = await res.json();
      console.log("Bulk Delete Response:", result);

      alert("Selected Messages Deleted Successfully ✅");

      setSelectedMessages([]);
      loadMessages();
    } catch (error) {
      console.log("Bulk Delete Error:", error);
      alert("Failed to delete selected messages ❌");
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>
        Contact Messages
      </h2>

      {/* ✅ Top Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
            cursor: "pointer",
            background: "white",
          }}
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        {/* Select All + Delete Selected */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={handleSelectAll}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {selectedMessages.length === sortedMessages.length
              ? "Unselect All"
              : "Select All"}
          </button>

          <button
            onClick={handleDeleteSelected}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Delete Selected ({selectedMessages.length})
          </button>
        </div>
      </div>

      {/* ✅ Loading */}
      {loading ? (
        <p style={{ color: "var(--color-text-light)" }}>Loading messages...</p>
      ) : sortedMessages.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            background: "white",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Mail size={48} color="#ccc" style={{ marginBottom: "1rem" }} />
          <p style={{ color: "var(--color-text-light)" }}>
            No messages received yet.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "1.5rem", width: "100%" }}>
          {sortedMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                borderLeft: "4px solid var(--color-primary)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* ✅ Checkbox Select */}
              <input
                type="checkbox"
                checked={selectedMessages.includes(msg.id)}
                onChange={() => handleSelect(msg.id)}
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  left: "1rem",
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              />

              {/* Delete Single */}
              <button
                onClick={() => handleDeleteSingle(msg.id)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "transparent",
                  border: "none",
                  color: "#dc2626",
                  cursor: "pointer",
                  opacity: 0.6,
                  transition: "opacity 0.2s",
                  zIndex: 10,
                }}
                onMouseOver={(e) => (e.target.style.opacity = "1")}
                onMouseOut={(e) => (e.target.style.opacity = "0.6")}
                title="Delete Message"
              >
                <Trash2 size={18} />
              </button>

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                <div style={{ minWidth: "200px" }}>
                  <h4 style={{ margin: 0, wordBreak: "break-word" }}>
                    {msg.name}
                  </h4>

                  <span
                    style={{
                      color: "var(--color-text-light)",
                      fontSize: "0.9rem",
                      wordBreak: "break-all",
                      display: "block",
                    }}
                  >
                    {msg.email}
                  </span>

                  {msg.mno && (
                    <span
                      style={{
                        color: "var(--color-text-light)",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "5px",
                      }}
                    >
                      <Phone size={14} />
                      {msg.mno}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#999",
                    fontSize: "0.8rem",
                  }}
                >
                  <Clock size={14} />
                  {new Date().toLocaleString()}
                </div>
              </div>

              {/* Message */}
              <div
                style={{
                  margin: 0,
                  lineHeight: "1.6",
                  background: "#f8f9fa",
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  wordBreak: "break-word",
                }}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
