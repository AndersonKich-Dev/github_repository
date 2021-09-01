import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export default function formatDate(date:string){
    return format(new Date(date), 'd MMMM yyyy ', {locale: ptBR})

}