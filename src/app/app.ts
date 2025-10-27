import { Component, signal } from '@angular/core';
import { ArowPager } from '../components/arow-pager/arow-pager';
import { TimeLoad } from '../components/time-load/time-load';
import { SliderMenu } from "../components/slider-menu/slider-menu";

@Component({
  selector: 'app-root',
  imports: [ArowPager, TimeLoad, SliderMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  items= signal([
    {
      id:0,
      title:'learn HTML',
      description:'frist decription',
      imgUrl:'/assets/appImg/html.png' 
    },
    {
      id:1,
      title:'learn CSS', 
      description:'frist decription',
      imgUrl:'/assets/appImg/css.png'

    }
  ])

  protected readonly title = signal('pixl2code');

titleTime = signal(0);
paraphrase = signal('Less design, more code!');

loadpage = signal<boolean>(true);

setItem(key : string , value: any){
  localStorage.setItem(key, JSON.stringify(value))
} 
 
 getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  
  
  
  ngOnInit(){
    const user = this.getItem<{ See: boolean }>('welcome-page');
    
    if (!user){
      setInterval(() =>{
        this.titleTime.update(prev => prev + 1);
        this.paraphrase.update( () =>  'Your, Welcome');
      },3000);
      setInterval(() => {
        this.loadpage.set( false )
        this.setItem('welcome-page', { See: true });
      },6000);
      
    }else{
      this.loadpage.set( false )
      
    }
}
}