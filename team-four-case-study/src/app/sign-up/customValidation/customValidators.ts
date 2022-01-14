import{ FormGroup } from '@angular/forms';

export class customValidators {
    constructor(){}

    static mustMatch(password1: string, password2: string){

        console.log(password1 + " | " + password2);

        return (formGroup : FormGroup) => {
           const control1 = formGroup.controls[password1];
           const control2 = formGroup.controls[password2];
           console.log(control1.value + " x " + control2.value);
           console.log(control2.errors);
           if (control2.errors && !control2.errors['mustMatch']){
                return; 
           }

           if(control1.value !== control2.value){
                console.log(control1.value + " - " + control2.value);
                control2.setErrors({mustMatch : true});//mustMatch error set to true
           } else{
                control2.setErrors(null);//No errors
           }
           return null;
        }
    }
}