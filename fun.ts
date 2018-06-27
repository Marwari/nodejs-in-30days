function disp_details(id:number, name:string, mall_id?:string){
console.log("ID", id);
console.log("Name", name);

if(mall_id!=undefined)
console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@abc.xyz");