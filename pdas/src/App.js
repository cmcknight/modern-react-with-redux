import ProfileCard from './ProfileCard';
import 'bulma/css/bulma.css';
import AlexaImage from './img/alexa.png';
import CortanaImage from './img/cortana.png';
import SiriImage from './img/siri.png';
const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                imageSrc={AlexaImage}
                altText='Alexa Personal Digital Assistant'
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className='column is-4'>
              {' '}
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                imageSrc={CortanaImage}
                altText='Cortana Personal Digital Assistant'
                description="Cortana was created by Microsoft. Who knows what it does"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                imageSrc={SiriImage}
                altText='Siri Personal Digital Assistant'
                description="Siri was created by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
