const hashtags = {
  tiktok: ["#fyp", "#foryou", "#viral", "#trending", "#tiktok", "#explore"],
  instagram: ["#insta", "#love", "#photo", "#instagood", "#follow", "#like"],
  gaming: ["#gaming", "#gamer", "#gameplay", "#esports", "#online", "#fun"],
  fitness: ["#fitness", "#gym", "#workout", "#fit", "#motivation", "#health"],
  cars: ["#cars", "#bmw", "#audi", "#carspotting"],
  money: ["#money", "#business", "#success", "#rich"]
};

function generate() {
  let topic = document.getElementById("topic").value.trim();
  let category = document.getElementById("category").value;

  let base = [...hashtags[category]];
  base.sort(() => Math.random() - 0.5);

  let selected = base.slice(0, 20);

  if (topic !== "") {
    let words = topic.split(" ");

    words.forEach(word => {
      selected.push("#" + word);
      selected.push("#" + word + "life");
      selected.push("#" + word + "2026");
    });
  }

    document.getElementById("result").innerText =
  "✔ Skopírované:\n\n" + selected.join(" ");

}

  // premiešanie správne
  base.sort(() => Math.random() - 0.5);

  let selected = base.slice(0, 20);

  if (topic !== "") {
    selected.push("#" + topic.replace(/\s+/g, ""));
  }

  document.getElementById("result").innerText = selected.join(" ");


function copyText() {
  let text = document.getElementById("result").innerText;

  if (!text) {
    alert("Najprv vygeneruj hashtagy!");
    return;
  }

  generate()
    .then(() => alert("Skopírované!"))
    .catch(() => alert("Nepodarilo sa skopírovať"));
}
