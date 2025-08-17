const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const navBar = document.querySelector('#navbar');

if(bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product1-container .pro");
  const itemsPerPage = 8;
  const pagination = document.getElementById("pagination");

  // Show only products for the given page
  function showPage(page) {
    products.forEach((item, index) => {
      item.style.display =
        index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
          ? "block"
          : "none";
    });
  }

  // Create pagination buttons
  function setupPagination() {
    const pageCount = Math.ceil(products.length / itemsPerPage);
    pagination.innerHTML = "";

    // Prev button
    let prev = document.createElement("a");
    prev.innerHTML = "&laquo;";
    prev.href = "#";
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      let activePage = Number(document.querySelector("#pagination a.active").dataset.page);
      if (activePage > 1) {
        showPage(activePage - 1);
        updateActive(activePage - 1);
      }
    });
    pagination.appendChild(prev);

    // Page numbers
    for (let i = 1; i <= pageCount; i++) {
      let pageLink = document.createElement("a");
      pageLink.innerText = i;
      pageLink.href = "#";
      pageLink.dataset.page = i;

      pageLink.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(i);
        updateActive(i);
      });

      if (i === 1) pageLink.classList.add("active");
      pagination.appendChild(pageLink);
    }

    // Next button
    let next = document.createElement("a");
    next.innerHTML = "&raquo;";
    next.href = "#";
    next.addEventListener("click", (e) => {
      e.preventDefault();
      let activePage = Number(document.querySelector("#pagination a.active").dataset.page);
      if (activePage < pageCount) {
        showPage(activePage + 1);
        updateActive(activePage + 1);
      }
    });
    pagination.appendChild(next);
  }

  // Update active page styling
  function updateActive(page) {
    document.querySelectorAll("#pagination a").forEach(a => a.classList.remove("active"));
    let link = document.querySelector(`#pagination a[data-page="${page}"]`);
    if (link) link.classList.add("active");
  }

  // Initialize
  showPage(1);
  setupPagination();
});

