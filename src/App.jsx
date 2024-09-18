import { useState } from "react";
import Learner from "./components/Learner";
import "./App.css";

const learnerInfo = [
  {
    name: "Cait Yomorta",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
    scores: [
      {
        date: "2018-02-08",
        score: 77,
      },
      {
        date: "2018-04-22",
        score: 92,
      },
      {
        date: "2018-09-15",
        score: 68,
      },
    ],
  },
  {
    name: "Holly Baird",
    bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
    scores: [
      {
        date: "2018-12-14",
        score: 88,
      },
      {
        date: "2019-01-09",
        score: 79,
      },
    ],
  },
];

function App() {
  
  const [learnerData, setLearnerData] = useState({ learners: learnerInfo });

  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: []
  });

  //handle change
  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      [e.target.name]: e.target.value,
    });
  };
//handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLearner);

    const randomScore = Math.floor(Math.random()* 101 );//generate random score for the new learners
    const addLearner = { 
      ...newLearner, scores: [
        {
          score:randomScore, 
          date: new Date().toLocaleDateString() //set current date
        }
      ] 
    };  
    

    

    setLearnerData({
      learners: [addLearner, ...learnerData.learners],
    });

    setNewLearner({
      name: "",
      bio: "",
      scores:[]
    });
  };


  return (
   
    <div className="container">
      <h1>Learners</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner
          key={index}
          learners={learner}
        />
      ))}

      <h2>New Learners Form</h2>

    
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newLearner.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <input
            type="text"
            name="bio"
            value={newLearner.bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <input className="button" type="submit" value="Add"/>
      </form>
      </div>
  
  );
}

export default App;
