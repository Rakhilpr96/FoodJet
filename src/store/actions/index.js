const getDetail = id => {
  return {
    type: 'GETDATA',
    payload: id,
  };
};

export {getDetail};
