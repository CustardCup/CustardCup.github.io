let output = document.getElementById("count")

function countWords() {
  const str = document.getElementById("text-input").value;
  output.textContent = str.trim().split(/\s+/).length;
}
