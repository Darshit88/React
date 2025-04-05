import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./habit.css";

function HabitTracker() {
  const [habit, setHabit] = useState("");
  const [goodHabits, setGoodHabits] = useState([]);
  const [badHabits, setBadHabits] = useState([]);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const storedGood = JSON.parse(localStorage.getItem("goodHabits")) || [];
    const storedBad = JSON.parse(localStorage.getItem("badHabits")) || [];
    setGoodHabits(storedGood);
    setBadHabits(storedBad);
    setShowSections(storedGood.length > 0 || storedBad.length > 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("goodHabits", JSON.stringify(goodHabits));
    localStorage.setItem("badHabits", JSON.stringify(badHabits));
    setShowSections(goodHabits.length > 0 || badHabits.length > 0);
  }, [goodHabits, badHabits]);

  const addHabit = (type) => {
    if (!habit.trim()) return;
    if (type === "good") {
      setGoodHabits((prev) => [...prev, habit]);
    } else {
      setBadHabits((prev) => [...prev, habit]);
    }
    setHabit("");
    setShowSections(true);
  };

  const deleteHabit = (type, index) => {
    if (type === "good") {
      const updatedGoodHabits = goodHabits.filter((_, i) => i !== index);
      setGoodHabits(updatedGoodHabits);
    } else {
      const updatedBadHabits = badHabits.filter((_, i) => i !== index);
      setBadHabits(updatedBadHabits);
    }
    setShowSections(goodHabits.length > 1 || badHabits.length > 1);
  };

  return (
    <div className="habit-tracker-container">
      <h1>Habit Tracker</h1>
      <input
        type="text"
        className="habit-input"
        placeholder="Enter a habit..."
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <div className="button-group">
        <button className="good-button" onClick={() => addHabit("good")}>
          Add to Good Habits
        </button>
        <button className="bad-button" onClick={() => addHabit("bad")}>
          Add to Bad Habits
        </button>
      </div>

      {showSections && (
        <div className="habit-list">
          {goodHabits.length > 0 && (
            <div className="habit-section good-habits">
              <h2>Good Habits ✅</h2>
              {goodHabits.map((item, index) => (
                <div className="habit-item fixed-width" key={index}>
                  {item}
                  <button
                    className="delete-button"
                    onClick={() => deleteHabit("good", index)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}

          {badHabits.length > 0 && (
            <div className="habit-section bad-habits">
              <h2>Bad Habits ❌</h2>
              {badHabits.map((item, index) => (
                <div className="habit-item fixed-width" key={index}>
                  {item}
                  <button
                    className="delete-button"
                    onClick={() => deleteHabit("bad", index)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HabitTracker;





  
  
  
   
  