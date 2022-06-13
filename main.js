const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("increase")) {
      count++;
      counter.style.color = "green";
    } else if (styles.contains("decrease")) {
      count--;
      counter.style.color = "red";
    } else {
      count = 0;
      counter.style.color = "gray";
    }

    counter.textContent = count;
  });
});
