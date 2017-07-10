import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {

    transform( duration: string ):string {
       let hours:number =Math.floor(parseFloat( duration)/60 );
       let hour:string = GetNumWord( hours,'час','часа','часов' )
       let minutes:number = parseFloat( duration )%60;
       let minute:string = GetNumWord( minutes,'минута','минуты','минут' );
       let result: string = ''
       if ( hours ) {
            result = `${hours} ${hour} `
       }
       if ( minutes ){
           result += `${minutes} ${minute}`
       }
                      
       return result
       
    }
}

    function GetNumWord(Num,Word1,Word2,Word5) {
            let DD=Num%100;
            if ( (DD >= 11) && (DD <= 19) )
                return Word5;
            let D = Num%10;
            if ( D == 1 )
                return Word1;
            if ( (D >=2 ) && (D <= 4) )
                return Word2;
        return Word5;
    }

