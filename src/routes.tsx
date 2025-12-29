import type { JSX } from 'react'
import Index from './pages/Index'
import Hallitus from './pages/yhdistys/Hallitus'
import Tiedotus from './pages/yhdistys/Tiedotus'
import Saannot from './pages/yhdistys/Saannot'
import Talous from './pages/yhdistys/Talous'
import Tunnukset from './pages/yhdistys/Tunnukset'
import Tilinumerot from './pages/yhdistys/Tilinumerot'
import Vaalijarjestys from './pages/yhdistys/Vaalijarjestys'
import Yhteystiedot from './pages/yhdistys/Yhteystiedot'
import Brandiohje from './pages/yhdistys/Brandiohje'
import Edunvalvonta from './pages/toiminta/Edunvalvonta'
import Sitsit from './pages/toiminta/Sitsit'
import Vuosijuhlat from './pages/toiminta/Vuosijuhlat'
import Liikunta from './pages/toiminta/Liikunta'
import Ruokavalitys from './pages/toiminta/Ruokavalitys'
import README from './pages/toiminta/README'
import Hairinta from './pages/turvallisuus/Hairinta'
import Tietosuoja from './pages/turvallisuus/Tietosuoja'
import FuksiInfo from './pages/fukseille/fuksi-info'
import Yrityksille from './pages/yritykset/yrityksille'
import Kalenteri from './pages/tapahtumat/Kalenteri'
import LisaaTapahtuma from './pages/tapahtumat/Lisaa-tapahtuma'
import English from './pages/english/English'


export type AppRoute = {
  path: string
  element: JSX.Element
}

export const appRoutes: AppRoute[] = [
  { path: '/', element: <Index /> },
  { path: '/hallitus', element: <Hallitus /> },
  { path: '/tiedotus', element: <Tiedotus /> },
  { path: '/säännöt', element: <Saannot /> },
  { path: '/talous', element: <Talous /> },
  { path: '/tunnukset', element: <Tunnukset /> },
  { path: '/tilinumerot', element: <Tilinumerot /> },
  { path: '/vaalijarjestys', element: <Vaalijarjestys /> },
  { path: '/yhteystiedot', element: <Yhteystiedot /> },
  { path: '/brandiohje', element: <Brandiohje /> },
  { path: '/edunvalvonta', element: <Edunvalvonta /> },
  { path: '/sitsit', element: <Sitsit /> },
  { path: '/vuosijuhlat', element: <Vuosijuhlat /> },
  { path: '/liikunta', element: <Liikunta /> },
  { path: '/ruokavalitys', element: <Ruokavalitys /> },
  { path: '/README', element: <README /> },
  { path: '/hairinta', element: <Hairinta /> },
  { path: '/tietosuoja', element: <Tietosuoja /> },
  { path: '/fuksi-info', element: <FuksiInfo /> },
  { path: '/yrityksille', element: <Yrityksille /> },
  { path: '/kalenteri', element: <Kalenteri /> },
  { path: '/lisaa-tapahtuma', element: <LisaaTapahtuma /> },
  { path: '/english', element: <English /> },
]
