const darkMode = document.querySelector("#darkMode");
let toggle = false;

//WE need to click on the sun
//darkMode.addEventListener("mouseover", () => {
darkMode.addEventListener("mouseover", () => {
  //We need to use anime.js
  //We set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  //add different animations to the timeline
  timeline
    .add({
      targets: ".text",
      color: "rgb(255,0,0)",
      backgroundColor: "rgb(0,0,0)",
      // d: [{ value: moonPath }],
    })

    .add(
      {
        targets: ".last",
        translateY: -300,
        fontSize: "15px",
        padding: "30px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".back",
        translateY: -250,
        fontSize: "25px",
        padding: "25px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".middle",
        translateY: -220,
        fontSize: "50px",
        padding: "30px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".stay",
        translateY: -150,
        fontSize: "80px",
        padding: "30px",
      },
      "-=750"
    )
    .add(
      {
        targets: ".front",
        translateY: -25,
        fontSize: "110px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".first",
        translateY: 250,
        fontSize: "145px",
      },
      "-=800"
    );
});

outside.addEventListener("mouseover", () => {
  //We need to use anime.js

  //We set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  //add different animations to the timeline
  timeline
    .add({
      targets: ".text",
      color: "rgb(0,0,0)",
      backgroundColor: "rgb(245,245,245)",
      // d: [{ value: moonPath }],
    })
    .add(
      {
        targets: ".last",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=800"
    )
    .add(
      {
        targets: ".back",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".middle",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".middle2",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".front",
        translateY: 0,
        fontSize: "80px",
      },
      "-=700"
    )
    .add(
      {
        targets: ".first",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=800"
    )
    .add(
      {
        targets: ".stay",
        translateY: 0,
        fontSize: "80px",
        padding: "0px",
      },
      "-=800"
    );

  //Everytime we click on the sun i want the toggle to switch
});
