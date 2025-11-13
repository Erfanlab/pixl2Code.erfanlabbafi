import { Component, NgModule, signal } from '@angular/core';
import { ArowPager } from '../components/arow-pager/arow-pager';
import { TimeLoad } from '../components/time-load/time-load';
import { SliderMenu } from "../components/slider-menu/slider-menu";
import { LostConection } from '../components/lostConection/lost-conection';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ArowPager, TimeLoad, SliderMenu, LostConection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class : 'relative flex justify-center items-center'
  }
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

    },
    {
      id:2,
      title:'learn angular', 
      description:'frist decription',
      imgUrl:'/assets/appImg/angular.png'

    },
    {
      id:3,
      title:'learn bootstrap', 
      description:'frist decription',
      imgUrl:'/assets/appImg/bootstrap.png'

    },
    {
      id:4,
      title:'learn dribble', 
      description:'frist decription',
      imgUrl:'/assets/appImg/dribble.png'

    },
    {
      id:5,
      title:'learn figma', 
      description:'frist decription',
      imgUrl:'/assets/appImg/figma.png'

    },
    {
      id:6,
      title:'learn git', 
      description:'frist decription',
      imgUrl:'/assets/appImg/git.png'

    },
    {
      id:7,
      title:'learn github', 
      description:'frist decription',
      imgUrl:'/assets/appImg/github.png'

    },
    {
      id:8,
      title:'learn html', 
      description:'frist decription',
      imgUrl:'/assets/appImg/html.png'

    },
    {
      id:9,
      title:'learn react', 
      description:'frist decription',
      imgUrl:'/assets/appImg/react.png'

    },
    {
      id:10,
      title:'learn typescript', 
      description:'frist decription',
      imgUrl:'/assets/appImg/typescript.png'

    },
    {
      id:11,
      title:'learn ICON-VIP', 
      description:'frist decription',
      imgUrl:'/assets/appImg/ICON-VIP.png'

    }
  ])
numberslider = signal<number>(0);
itmesL = signal<number>(this.items().length);
classList = signal<'prev'|'next' | 'none'>('none');
nextSlider(){
this.classList.set('next');
setTimeout(() => {
  if ((this.numberslider()) === this.itmesL()){
    this.numberslider.set(0);
    this.classList.set('none');
  } else {
    this.numberslider.set(this.numberslider() + 1);
    this.classList.set('none');
    }
  }, 1000);
}

prevSlider(){
  this.classList.set('prev');
  setTimeout(() => {
    if(this.numberslider() === -1){
      console.log(this.numberslider())
      this.numberslider.set(this.itmesL());
      this.classList.set('none');
    }else {
      this.numberslider.set(this.numberslider() - 1 );
      this.classList.set('none');

    }
  }, 1000);
  }


  lostConection = signal<boolean>(false);

CloseModal(){
  this.lostConection.set(false);

}


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