import {MensageProtocol} from '../classes/interface/message-protocol'
export class Message implements MensageProtocol{
    sendMessage(msg:string){
        console.log('Mensagem enviada' ,msg)
    }
}