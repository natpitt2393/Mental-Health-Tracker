select
 u.name
,m.title
,m.value as color_value
,d.date_created
,d.title
,d.description
,d.mood_id
from user u
  left join diary d
    on u.id = d.user_id
  left join mood m
    on d.mood_id = m.id
where u.id = 1
order by date_created desc
