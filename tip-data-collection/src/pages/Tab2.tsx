import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';

import { trash } from 'ionicons/icons';
import { useState } from 'react';
import { Entry } from '../data/entries';
import { saveEntry } from '../data/storage';

import './Tab2.css';

const Tab2: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  const addToTotal = (value: number) => {
    setTotal((prev) => prev + value);
  };

  const resetTotal = () => {
    setTotal(0);
  };

  const [gender, setGender] = useState<"male" | "female" | null>(null);

  const toggleGender = (value: "male" | "female") => {
    setGender((prev) => (prev === value ? null : value));
  };

  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const toggleAge = (value: string) => {
    setSelectedAge((prev) => (prev === value ? null : value));
  };

  const [selectedRace, setSelectedRace] = useState<string | null>(null);

  const toggleRace = (value: string) => {
    setSelectedRace((prev) => (prev === value ? null : value));
  };

  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const toggleGroup = (value: string) => {
    setSelectedGroup((prev) => (prev === value ? null : value));
  };

  const [cabana, setCabana] = useState(false);

  const toggleCabana = () => {
    setCabana((prev) => !prev);
  };

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (value: string) => {
    setSelectedTags((prev) =>
      prev.includes(value)
        ? prev.filter((t) => t !== value)
        : [...prev, value]
    );
  };

  const [saving, setSaving] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);

  const triggerSave = async () => {
    const entry: Entry = {
      tip: total,
      gender: gender ?? "",
      age: selectedAge ?? "",
      race: selectedRace ?? "",
      group: selectedGroup ?? "",

      goldChain: selectedTags.includes("Gold Chain"),
      carryingBag: selectedTags.includes("Carrying Bag"),
      bald: selectedTags.includes("Bald"),
      askAbtTs: selectedTags.includes("Ask abt TS"),
      biggy: selectedTags.includes("Biggy"),
      buff: selectedTags.includes("Buff"),
      britishAccent: selectedTags.includes("British Accent"),
      italyAccent: selectedTags.includes("Italy Accent"),
      cabana,
    };

    await saveEntry(entry);

    console.log("Saved locally:", entry);

    // reset form
    setTotal(0);
    setGender(null);
    setSelectedAge(null);
    setSelectedRace(null);
    setSelectedGroup(null);
    setSelectedTags([]);
    setCabana(false);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="entry-container">
          <div className="counter-block">
            <div className="counter-row">
              <div className="counter-label">
                Tip: {total}
              </div>

              <IonButton
                className={`cabana-button ${cabana ? "selected" : ""}`}
                fill={cabana ? "solid" : "outline"}
                onClick={toggleCabana}
              >
                Cabana
              </IonButton>
              <IonButton
                color="danger"
                className="reset-button"
                onClick={resetTotal}
              >
                <IonIcon icon={trash} />
              </IonButton>
            </div>

            <div className="button-row">
              {[1, 5, 10, 25].map((num) => (
                <IonButton
                  key={num}
                  className="money-button"
                  onClick={() => addToTotal(num)}
                >
                  {num}
                </IonButton>
              ))}
            </div>
          </div>

          <div className="gender-row">
            <IonButton
              className={`gender-button male ${gender === "male" ? "selected" : ""}`}
              fill={gender === "male" ? "solid" : "outline"}
              onClick={() => toggleGender("male")}
            >
              Male
            </IonButton>

            <IonButton
              className={`gender-button female ${gender === "female" ? "selected" : ""}`}
              fill={gender === "female" ? "solid" : "outline"}
              onClick={() => toggleGender("female")}
            >
              Female
            </IonButton>
          </div>
          
          <div className="button-row">
            {["Child", "Young", "Middle", "Old"].map((label) => (
              <IonButton
                key={label}
                className={`word-button ${selectedAge === label ? "selected" : ""}`}
                fill={selectedAge === label ? "solid" : "outline"}
                onClick={() => toggleAge(label)}
              >
                {label}
              </IonButton>
            ))}
          </div>

          <div className="button-row">
            {["White", "Black", "Asian", "European"].map((label) => (
              <IonButton
                key={label}
                className={`word-button ${selectedRace === label ? "selected" : ""}`}
                fill={selectedRace === label ? "solid" : "outline"}
                onClick={() => toggleRace(label)}
              >
                {label}
              </IonButton>
            ))}
          </div>

          <div className="button-row">
            {["Couple", "Friend Group", "Family", "Large Family"].map((label) => (
              <IonButton
                key={label}
                className={`word-button ${selectedGroup === label ? "selected" : ""}`}
                fill={selectedGroup === label ? "solid" : "outline"}
                onClick={() => toggleGroup(label)}
              >
                {label}
              </IonButton>
            ))}
          </div>

          <div className="tag-box">
            <div className="tag-grid">
                {[
                  "Gold Chain",
                  "Carrying Bag",
                  "Bald",
                  "Ask abt TS",
                  "Biggy",
                  "Buff",
                  "British Accent",
                  "Italy Accent",
                ].map((label) => (
                  <IonButton
                    key={label}
                    className={`tag-button ${selectedTags.includes(label) ? "selected" : ""}`}
                    fill={selectedTags.includes(label) ? "solid" : "outline"}
                    onClick={() => toggleTag(label)}
                  >
                    {label}
                  </IonButton>
                ))}
            </div>
          </div>
          <IonButton onClick={triggerSave}>
            Save Entry
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;