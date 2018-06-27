class student {
name:string

constructor(a:string){
this.name = a}}

class person extends student {
disp():void{
console.log("Name": this.name)}}

var obj = new person("Ajay");
obj.disp()