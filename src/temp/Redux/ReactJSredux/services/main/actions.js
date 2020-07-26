import { UPDATE_MAIN } from './actionTypes';

// Liên kết với giao diện
// Khi giao diện chạy lệnh, lệnh này thực hiện
// Từ khóa cho liên kết ở giao diện import server_function from './action' ... connect(propstostate,{ server_function })
export const updateMain = show => ({
  type: UPDATE_MAIN,
  payload: show
});
