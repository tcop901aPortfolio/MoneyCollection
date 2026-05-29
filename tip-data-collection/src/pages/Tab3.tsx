import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { getEntries } from '../data/storage';

export const exportData = async () => {
  const data = await getEntries();

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "entries.json";
  a.click();

  URL.revokeObjectURL(url);
};

const Tab3: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([]);

  const loadEntries = async () => {
    const data = await getEntries();
    setEntries(data);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const boolDisplay = (value: boolean) => (value ? "Y" : "-");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Entries</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonButton expand="block" onClick={loadEntries}>
          Refresh
        </IonButton>

        <div style={{ overflowX: 'auto', padding: 10 }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '12px',
              minWidth: '900px',
              textAlign: 'left',
            }}
          >
            <thead>
              <tr>
                <th>Tip</th>
                <th className='graph-title'>Gender</th>
                <th className='graph-title'>Age</th>
                <th className='graph-title'>Race</th>
                <th className='graph-title'>Group</th>

                <th className='graph-title'>Gold</th>
                <th className='graph-title'>Bag</th>
                <th className='graph-title'>Bald</th>
                <th className='graph-title'>TS</th>
                <th className='graph-title'>Biggy</th>
                <th className='graph-title'>Buff</th>
                <th className='graph-title'>British</th>
                <th className='graph-title'>Italy</th>
                <th className='graph-title'>Cabana</th>
              </tr>
            </thead>

            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.tip}</td>
                  <td>{entry.gender}</td>
                  <td>{entry.age}</td>
                  <td>{entry.race}</td>
                  <td>{entry.group}</td>

                  <td>{boolDisplay(entry.goldChain)}</td>
                  <td>{boolDisplay(entry.carryingBag)}</td>
                  <td>{boolDisplay(entry.bald)}</td>
                  <td>{boolDisplay(entry.askAbtTs)}</td>
                  <td>{boolDisplay(entry.biggy)}</td>
                  <td>{boolDisplay(entry.buff)}</td>
                  <td>{boolDisplay(entry.britishAccent)}</td>
                  <td>{boolDisplay(entry.italyAccent)}</td>
                  <td>{boolDisplay(entry.cabana)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <IonButton expand="block" onClick={exportData}>
          Export Data
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;