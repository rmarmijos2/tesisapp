import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech) { }

  discurso(texto:string){
    this._tts.speak({
      text:texto,
      locale:'es-CO',
      rate:1
    }).then(()=> console.log('Funciona'))
     .catch((resp:any)=>console.error(resp)
    );
  }

  speech(texto:string){
    this._tts.speak({
      text:texto,
      locale:'en-US',
      rate:1
    }).then(()=> console.log('Funciona'))
     .catch((resp:any)=>console.error(resp)
    );
  }

}
