import formatDistance from 'date-fns/formatDistance';
import format from 'date-fns/format';

export const formatDate = (date: Date): string => {
  return formatDistance(date, new Date());
};

export const extractHour = (date: Date): string => {
  return format(date, 'H:mm');
};

export const extractDate = (date: Date): string => {
  return format(date, 'dd MMM. yyyy');
};
