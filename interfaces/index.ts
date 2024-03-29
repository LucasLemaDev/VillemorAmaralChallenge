export type Hearing = {
   processNumber: string;
   date: string;
   court: string;
   correspondent: string;
 };
 
 export type ResponseError = {
   message: string;
 };

 export type ProcessGroup = {
  name: string,
  color: string,
  processList?: string[]
};
