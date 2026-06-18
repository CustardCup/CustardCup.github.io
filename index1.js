let output = document.getElementById("count")

function countWords() {
  const str = document.getElementById("text-input").value;
  if (str.trim()) {
  output.textContent = str.trim().split(/\s+/).length;
  } else output.textContent = 0;
}

function changeColour() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('myBody').style.backgroundColor = randomColor;
}
