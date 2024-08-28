import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ecar-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
  @ContentChild('paginator') paginator: TemplateRef<any> | undefined;

  @Input() color!: string

}
