import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatStepper} from '@angular/material/stepper';
import { ClassService } from '../service/class.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-schedule-stepper',
  templateUrl: './schedule-stepper.component.html',
  styleUrl: './schedule-stepper.component.css'
})
export class ScheduleStepperComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  compiledData: any = {}; 
  // compiledView: any = {}; 
  constructor(private _formBuilder: FormBuilder,private classService: ClassService,private dialog: MatDialog,private _snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      instructor: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      tasks: this._formBuilder.array([]) // Starts as an empty array
    });
    this.thirdFormGroup = this._formBuilder.group({
      classDateCtrl: ['', Validators.required],
      classTimeCtrl: ['', Validators.required],
      schedule: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      duration: ['', Validators.required],
      capacity: ['', Validators.required],
      fee: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      confirmationCtrl: [''],
    });
  }
  // Get the tasks FormArray for easier access
get tasks(): FormArray {
  return this.secondFormGroup.get('tasks') as FormArray;
  }
  removeTask(index: number) {
    this.tasks.removeAt(index);
  }
  // Method to add a new task form control
addTask() {
  this.tasks.push(this._formBuilder.group({
    taskName: ['', Validators.required]
  }));
}
  submit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid /* check other form groups */) {
      // Process your data here
    }
}
  compileDataForReview() {
    // Assuming all form groups have a value property that is an object holding the form data
    // this.compiledData = {
    //   ...this.firstFormGroup.value,
    //   ...this.secondFormGroup.value,
    //   ...this.thirdFormGroup.value,
    //   ...this.fourthFormGroup.value,
    //   ...this.fifthFormGroup.value
    

  this.compiledData = {
    id: '', // ID will be generated in the service for new classes
    title: this.firstFormGroup.value.title,
    tasks:this.secondFormGroup.value.tasks,
    instructor: this.firstFormGroup.value.instructor,
    schedule: this.thirdFormGroup.value.schedule, // Example placeholder, replace with actual data collection
    duration: this.fourthFormGroup.value.duration, // Replace with actual data
    capacity: this.fourthFormGroup.value.capacity, // Replace with actual data
    enrollmentCount: 0, // Typically starts at 0 for a new class
    fee: this.fourthFormGroup.value.fee, // Replace with actual data
    thumbnailUrl: '', // Replace with actual data
    status: 'upcoming'
  };
}
finalize() {
  this.compileDataForReview();
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '400px', // Adjust width as needed
    height: '500px',
    data: this.compiledData
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // User confirmed the details
      // Here, trigger the service to add the class, then clear the form and show a notification
      this.classService.addClass(this.compiledData).subscribe({
        next: () => {
          // Reset the stepper and show a success message
          this.stepper.reset();
          this.showNotification('Class successfully added');
          this.resetStepperAndForms();
        },
        error: (error) => console.error('Error adding class:', error)
      });
    }
  });
}

  stepperSelectionChanged(event: any) {
    if (event.selectedIndex === this.stepper._steps.length - 1) {
      // Assuming the last step is the confirmation step
      this.compileDataForReview();
    }
  }

  showNotification(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  resetStepperAndForms() {
    // Reset individual form groups
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.fourthFormGroup.reset();
    // If you have a fifthFormGroup or more, continue to reset them here
    this.fifthFormGroup.reset();
  
    // Optionally, if you are using a MatStepper and want to return to the first step
    this.stepper.reset();
  
    // If your secondFormGroup contains a FormArray for tasks, you might want to clear it as well
    while (this.tasks.length) {
      this.tasks.removeAt(0);
    }
    // Add one task back if you always need at least one
    this.addTask();
  }
  
}