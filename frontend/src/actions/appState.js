export function setLoading(loading) {
  return {
    type: "SET_LOADING",
    loading,
  };
}

export function setSidebarOpen(sidebarOpen) {
	return {
		type: "SET_SIDEBAR_OPEN",
		sidebarOpen
	}
}
