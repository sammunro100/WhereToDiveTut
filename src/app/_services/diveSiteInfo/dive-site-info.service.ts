import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiveSiteInfoService {

  
  toggleDiveSiteInfo = false;
  diveSiteMetaData = [
    {
      coords: [-997961.8412912614, 7260906.190865462],
      name: 'Clownfish',
      diveType: 'Open Water Diving - Reef',
      description: 'There have been so many times, I have seen a man wanting to weep, but, instead, beat his heart until it was unconcsious - Masculine'
    },
    {
      coords: [-1153281.8827667392, 7059723.932418878],
      name: 'Surgeonfish',
      diveType: 'Wreck',
      description: 'She asked, you are in love, what does love look like, to which I replied, like everything Ive ever lost come back to me.'
    },
    {
      coords: [-1078679.3431604072, 6694049.189102596],
      name: 'Green Sea Turtles',
      diveType: 'Drift Diving',
      description: 'If we must both be right we will lose each other - Exile'
    },
    {
      coords: [-550346.6036532694, 6622504.130627669],
      name: 'Moorish Idol',
      diveType: 'Night Diving',
      description: 'Even if you are a small forest surviving off of moon alone. Your light is extraordinary - reminder'
    },
    {
      coords: [-506318.8753610074, 6490420.945750885],
      name: 'Yellow Tang',
      diveType: 'Deep Diving',
      description: 'I am relieved when I see the feminine prescence in a mans eyes. It means he is a peace I do not have to bring to him - Ease'
    },
    {
      coords: [-215246.67165105627, 6534448.674043147],
      name: 'Pacific Cleaner Shrimp',
      diveType: 'Cave Diving',
      description: 'If someone does not want it is not the end of the world. but if I do not want me. The world is nothing but endings.'
    },
    {
      coords: [12229.9245256281, 6561354.50799953],
      name: 'Black and White Damselfish',
      diveType: 'Technical Diving',
      description: 'You can not remain a war between what you want to say (who you really are). And what you should say (who you pretend to be). Your mouth was not designed to eat itself.  - Split'
    },
    {
      coords: [141867.1244972872, 6710559.587212195],
      name: 'Royal Gramma',
      diveType: 'Ice Diving',
      description: 'Some people when they hear your story. Contract. Others upon hearing your story. Expand. And this is how you know.'
    },
    {
      coords: [61149.62262814096, 7011415.730542649],
      name: 'Spiny Box Pufferfish',
      diveType: 'Deep Diving',
      description: 'I will not die an unlived life. I will not live in fear of falling or catching fire. I choose to inhabit my days, to allow my living to open me, to make me less afraid, more accessible, to loosen my heart until it becomes a wing, a torch, a promise. I choose to risk my significance; to live so that which came to me as seed goes to the next as blossom and that which came to me as blossom, goes on as fruit. ~ Dawna markova'
    },
    {
      coords: [9783.939620502526, 7148390.885229684],
      name: 'Great White Shark',
      diveType: 'Wreck Diving',
      description: 'This moment can be A New Dawn, A New Day…. Forgive, Forget, and move on Ask your self; Do I wish to keep repeating the pattern? Perhaps it’s time for something NEW'
    },
    {
      coords: [-134529.16978191026, 7346515.66254486],
      name: 'Mako Shark',
      diveType: 'Open Water Diving',
      description: 'May you always have enough happiness to keep you sweet, Enough trials to keep you strong, Enough success to keep you eager, Enough faith to give you courage, And enough determination to make each day a good day.'
    }
  ]
  diveSiteInfo = new BehaviorSubject<any>(this.diveSiteMetaData[0]);
  constructor() { }

  setDiveSiteInfo(value: any): void{
    this.diveSiteInfo.next(value);
  }

  get getDiveSiteInfo(): BehaviorSubject<any>{
    return this.diveSiteInfo;
  }

  getDiveSites(){
    return this.diveSiteMetaData;
  }
  showDiveSiteInfo(){
    this.toggleDiveSiteInfo = !this.toggleDiveSiteInfo;
  }
}
