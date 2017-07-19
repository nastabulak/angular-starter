import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Popup } from 'ng2-opd-popup';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'
import { Course } from '../courses/course';
import { SummaryError } from './error-summary/summary-error'
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'course-details',
  templateUrl: 'course-details.component.html'
})

export class CourseDetailsComponent implements OnInit, OnDestroy {
  course: Course;
  authors = ['пушкин', 'лермонтов',
    'суперавтор', 'чебурашка'];
  sub: Subscription;
  courseForm: FormGroup;
  formErrors: any


  constructor(
    private courseService: CourseService,
    private router: Router,
    private popup: Popup,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService) {
      breadcrumbService.addFriendlyNameForRoute('/courses', 'Курсы')
      breadcrumbService.addFriendlyNameForRoute('/courses/new', 'Новый курс')
  }

  ngOnInit() {
    this.courseForm = this.fb.group({});

    this.sub = this.route.params
      .subscribe(params => {
        let courseId = +params['id'];
        if (courseId) {
          this.courseService.getCourse(courseId)
            .subscribe(course => {
              this.course = course;
              this.initializeForm();
              this.breadcrumbService.addFriendlyNameForRouteRegex('^/courses/[0-9]$', course.title)
            });
        } else {
          this.course = new Course();
          this.initializeForm();
        }
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  initializeForm() {
    this.courseForm = this.fb.group({
      title: [this.course.title, Validators.compose([Validators.required])],
      description: [this.course.description, Validators.compose([Validators.required])],
      date: [this.course.date, Validators.compose([Validators.required])],
      duration: [this.course.duration, Validators.compose([Validators.required, Validators.pattern("^[0-9]+$")])],
      authors: [this.course.authors, Validators.compose([Validators.required])],
    })
  }

  goBack($event): void {
    if (this.courseForm.dirty) {
      if (confirm('вы действительно хотите покинуть страницу? Данные не сохраняться.')) {
        this.goToList();
      }
    } else {
      this.goToList();
    }
    $event.preventDefault();
  }

  goToList() {
    this.router.navigate(['../courses']);
  }

  addCourse(course: Course) {
    this.courseService.create(course)
      .subscribe(course => {
        this.goToList()
      });
  }

  updateCourse(course: Course): void {
    this.courseService.update(course)
      .subscribe(course => {
        this.goToList()
      });
  }

  onSubmit() {
    this.formErrors = [];
    if (!this.courseForm.valid) {
      this.showPopUp()
      return false
    }
    var course = Object.assign({}, this.course, this.courseForm.value);
    if (course.id) {
      this.updateCourse(course)
    } else {
      this.addCourse(course)
    }
    return false;
  }

  showErrorSummary() {
    for (var controlName in this.courseForm.controls) {
      let control = this.courseForm.controls[controlName];
      if (control.errors) {
        this.formErrors.push(new SummaryError(
          controlName,
          JSON.stringify(control.errors)
        ))
      }
    }
  }

  showPopUp() {
    this.popup.options = {
      header: "Ошибка",
      color: "#428bca",
      widthProsentage: 30,
      animationDuration: 0,
      showButtons: false,
    };
    this.showErrorSummary()
    this.popup.show(this.popup.options);
  }

  closePopUp() {
    this.popup.visibleChanged.emit(false);
  }

}





