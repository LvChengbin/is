export default year => !!( !( year % 400 ) || ( !( year % 4 ) && ( year % 100 ) ) );
