import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { entries, Entry } from '../data/entries';

const Tab3: React.FC = () => {
  const [data, setData] = useState<Entry[]>([]);

  // refresh when tab loads
  useEffect(() => {
    setData([...entries]);
  }, [entries.length]);

  const refresh = () => {
    setData([...entries]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Entries</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: 12 }}>

          <IonButton expand="block" onClick={refresh}>
            Refresh
          </IonButton>

          {data.length === 0 && (
            <div style={{ marginTop: 20, opacity: 0.6 }}>
              No entries yet
            </div>
          )}

          {data.map((e, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #ccc',
                borderRadius: 12,
                padding: 10,
                marginTop: 10,
                fontSize: 14,
              }}
            >
              <div><b>Tip:</b> {e.tip}</div>
              <div><b>Gender:</b> {e.gender}</div>
              <div><b>Age:</b> {e.age}</div>
              <div><b>Race:</b> {e.race}</div>
              <div><b>Group:</b> {e.group}</div>

              <div><b>Gold Chain:</b> {e.goldChain ? "Yes" : "No"}</div>
              <div><b>Carrying Bag:</b> {e.carryingBag ? "Yes" : "No"}</div>

              <div><b>Bald:</b> {e.bald ? "Yes" : "No"}</div>
              <div><b>Ask TS:</b> {e.askAbtTs ? "Yes" : "No"}</div>
              <div><b>Biggy:</b> {e.biggy ? "Yes" : "No"}</div>
              <div><b>Buff:</b> {e.buff ? "Yes" : "No"}</div>
              <div><b>British Accent:</b> {e.britishAccent ? "Yes" : "No"}</div>
              <div><b>Italy Accent:</b> {e.italyAccent ? "Yes" : "No"}</div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;