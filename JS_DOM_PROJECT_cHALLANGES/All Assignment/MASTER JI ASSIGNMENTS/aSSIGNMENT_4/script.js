let currentPage = 1;
let pageLimit = 20;
let currentQuery = "tech";
let totalBooks = 0;
let totalPages = 1;
let books = [];

const input = document.getElementById("input-text");
const searchbtn = document.getElementById("searchbtn");
const result = document.getElementById("result");

searchbtn.addEventListener("click", () => {
  currentQuery = input.value.trim();
  if (currentQuery) {
    currentPage = 1;
    fetchData();
  }
});

async function fetchData() {
  const url = `https://api.freeapi.app/api/v1/public/books?page=${currentPage}&limit=${pageLimit}&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=${currentQuery}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    if (data.success && data.data) {
      totalBooks = data.data.totalBooks || 0;
      totalPages = Math.ceil(totalBooks / pageLimit);
      books = data.data.data || [];
      renderBooks(books, "grid");
    } else {
      result.innerHTML = "<p>No books found.</p>";
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    result.innerHTML = "<p>Error loading books. Please try again later.</p>";
  }
}

function renderBooks(books, viewType) {
  result.innerHTML = "";
  
  if (books.length === 0) {
    result.innerHTML = "<p>No books available.</p>";
    return;
  }
  
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    const imgSrc = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150";
    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
    const publishedDate = book.volumeInfo.publishedDate || "Unknown Date";
    const pageCount = book.volumeInfo.pageCount ? `${book.volumeInfo.pageCount} pages` : "Page count unavailable";
    
    bookDiv.innerHTML = `
      <img src="${imgSrc}" alt="Book image" />
      <div class="book-details">
        <h3>${book.volumeInfo.title}</h3>
        <p>${authors}</p>
        <p>${publishedDate}</p>
        <p>${pageCount}</p>
      </div>
    `;
    result.appendChild(bookDiv);
  });
}

// Initial fetch to populate results
fetchData();