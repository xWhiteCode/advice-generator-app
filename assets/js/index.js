(function() {
  const Request = async ($URL) => await (await fetch($URL)).json();
  const adviceID = document.getElementById("adviceID"),
        adviceElement = document.getElementById("advice"),
        change = document.getElementById("change");

  function show (data) {
    let {slip: {advice, id}} = data;

    adviceID.innerHTML = `ADVICE #${id}`;
    adviceElement.innerHTML = `${advice}`;
  };

  function reRequest () {
    Request(`https://api.adviceslip.com/advice/${~~(Math.random() * 225)}`)
      .then(data => show(data)).catch((err) => { throw err });
  }
  
  change.addEventListener("click", reRequest);
  
  reRequest();
  
})();