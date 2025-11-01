let output = document.getElementById("count")

function countWords() {
  var str = document.getElementById("text-input").value;
  output.textContent = str.trim().split(/\s+/).length;
}