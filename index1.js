let output = document.getElementById("count")

function countWords() {
  const str = document.getElementById("text-input").value;
  if (str !== "") {
  output.textContent = str.trim().split(/\s+/).length;
  } else output.textContent = 0;
}
