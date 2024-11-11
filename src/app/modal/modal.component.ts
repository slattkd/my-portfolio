import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { Gallery } from '../shared/interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
  @Input() galleryItem: Gallery | null = null;
  @Input() showModal: boolean = false;
 
  @Output() closeModalEvent = new EventEmitter<void>();

  modalBody:string = '';

  ngOnChanges(changes: SimpleChanges):void {

    if (changes['showModal'].currentValue == false) {
      this.closeModalEvent.emit();
    }

    if (changes['galleryItem'].currentValue !== null) {
      this.openModal(changes['galleryItem'].currentValue);
    }

  }

  openModal(galleryItem: Gallery) {
    this.modalBody = `<p class="mb-4 text-left font-semibold">Description</p><p>${galleryItem.description}</p>`;
    this.showModal = true;
  }

  closeModal() {
    // this.galleryItem = null;
    // this.modalBody = '';
    // this.showModal = false;
    this.closeModalEvent.emit();
  }

}