import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'builtin'
})
export class BuiltinPipe implements PipeTransform {

  // transform(studentList: any, searchText: any) {  
  //   if (searchText)  
  //       return studentList.filter(x => x.Name.toLowerCase().startsWith(searchText.toLowerCase())); 
          
  //   return studentList; 
  //(or)
                        //to search using name
  transform(Value: any, searchText: any) {  
    if (searchText)  
        return Value.filter(x => x.Name.toLowerCase().startsWith(searchText.toLowerCase())); 
          
    return Value; 


                  // to search using numbers


  // transform(value: any, args?: any): any {

  //   if(!value)return null;
  //   if(!args)return value;

  //   args = args.toLowerCase();

  //   return value.filter(function(item){
  //       return JSON.stringify(item).toLowerCase().includes(args);
  //   });
  }

}
