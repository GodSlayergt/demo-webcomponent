import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  
  @Prop({ mutable: true }) count: number=0;
  @Prop() heading: string="Counter";


 
  

  render() {
    return (
    <article class="widget">
  <div class="counter">{this.heading}</div>
  <div class="display">
    Count is : {this.count}
  </div>
  <button class="inc" onClick = {()=>this.count = this.count +1 }>Goals Portal</button>
</article>)






  }
}
