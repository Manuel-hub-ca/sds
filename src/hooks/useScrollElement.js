const handleNavigation = (id) => {
  if (id) {
    const e = document.getElementById(id);
    e.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default handleNavigation