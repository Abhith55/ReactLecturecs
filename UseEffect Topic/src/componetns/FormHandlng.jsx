import React, { useEffect, useState } from "react";

const FormHandlng = () => {
  const [hero, setHero] = useState("");

  const [movie, setMovie] = useState("");
  const [flag, setflag] = useState(false);
// 
 const [first, setfirst] = useState({
    Movie: "Marvel",
    Hero : "",
    name : ""

 });
  const submit = (e) => {
    e.preventDefault();
    alert("Your Form has ben submit");

    alert("Hero name " + hero);
    alert(" moivie name " + movie);
    // form empty the input field
    e.target.value == "";
    setflag(true);
  

   setfirst(()=>({Movie :movie,Hero: hero }) )
     setHero("");
    setMovie("");
  };
  return (
    <>
      <h1>fORM HANDLING</h1>
      <form action="" onSubmit={submit}>
        Hero :-{" "}
        <input
          value={hero}
          type="text"
          onChange={(e) => setHero(e.target.value)}
        />
        <br />
        <br />
        Movie :-{" "}
        <input
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <input type="submit" />
        {flag && (
          <>
            <h1> hero : {first.Hero}</h1>
            <h2> Movie : {first.Movie}</h2>
            <h2> Name : {first.name}</h2>
          </>
        )}
      </form>
    </>
  );
};

export default FormHandlng;
