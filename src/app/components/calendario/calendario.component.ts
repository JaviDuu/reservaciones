import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{
  public fechaMinima:Date = new Date();
  public fechaStrMinima: string | null = "";

  calanderForm: FormGroup = this.formBuilder.group({
    dia: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pd: DatePipe
  ) {
    this.calanderForm = new FormGroup({
      'dia': new FormControl('', Validators.required)
    })

  }

  onSubmit(): void{
    this.router.navigate(['reservar/opciones', this.calanderForm.value.dia]);
  }

  ngOnInit(): void {
    this.fechaMinima = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.fechaStrMinima = this.pd.transform(this.fechaMinima, "yyyy-MM-dd");
  }
}
