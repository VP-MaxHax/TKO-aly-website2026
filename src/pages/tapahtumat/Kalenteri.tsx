import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import fiLocale from '@fullcalendar/core/locales/fi'
import './Kalenteri.css'

export default function Calendar() {
  return (
    <div id="calendar">
      <h1>Tapahtumakalenteri</h1>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        locale={fiLocale}
        initialView="dayGridMonth"
        editable={false}
        selectable={true}
        contentHeight={'60%'}
        events={[{
          id: '1',
          title: 'Syyskokous',
          start: '2026-01-04',
          url: './events/syyskokous'
        },
        {
          id: '2',
          title: 'ATK-***',
          start: '2026-01-05',
          end: '2026-01-08',
          url: './events/atk-***'
        },
        {
          id: '3',
          groupId: '999',
          title: 'BGW',
          start: '2026-01-08T16:00:00',
          url: './events/bgw'
        },
        {
          id: '4',
          groupId: '999',
          title: 'BGW',
          start: '2026-01-15T16:00:00',
          url: './events/bgw'
        }
        ]}
      />
    </div>
  )
}