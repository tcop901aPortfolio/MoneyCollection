import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import './Tab1.css';

const Tab1: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>

      <IonContent fullscreen>
        <div className="home-container">
          <IonButton
            expand="block"
            className="home-button"
            onClick={() => history.push('/tab2')}
          >
            Add Entry
          </IonButton>

          <IonButton
            expand="block"
            className="home-button"
          >
            Backup Data
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;