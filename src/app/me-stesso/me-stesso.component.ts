import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-me-stesso',
  templateUrl: './me-stesso.component.html',
  styleUrls: ['./me-stesso.component.css']
})
export class MeStessoComponent implements OnInit {
  src:string=""
  path:string=""
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params=>{
        var id =parseInt(params.id)
        if (id==0){
          this.src="../../assets/hey.mp3"
          this.path="../../assets/hey.gif"
        } 
        if (id==1){
          this.src="../../assets/summer.mp3"
          this.path="../../assets/summer.gif"
        } 
        if (id==2){
          this.src="../../assets/ukulele.mp3"
          this.path="../../assets/ukulele.gif"
        }

      }
    )
  }

}
