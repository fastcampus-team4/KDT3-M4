import React from 'react';
import style from './Transactions.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTransactionsAll } from '../../api/productApi';

import { useMutation, useQuery } from '@tanstack/react-query';
import LoadingModal from '../../components/ui/loading/LoadingModal';

const Transactions = () => {
  // public으로 경로변경하고 에러나서 일단 여기에 목업데이터 가져오는 함수 임시로 작성했습니다.
  const getData = async () => {
    return fetch('../data/mockUpTransactions.json', {
      headers: {
        Accept: 'application / json',
      },
    }).then((res) => {
      const result = res.json();
      return result;
    });
  };
  const { isLoading, data, refetch } = useQuery(['transactions'], () => getData());

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <ul className={style.transactionsList}>
      {!isLoading &&
        data?.map((transaction) => {
          const { account, detailId, done, isCanceled, product, timePaid, user } = transaction;
          <li></li>;
          console.log({ account, detailId, done, isCanceled, product, timePaid, user });
        })}
    </ul>
  );
};

export default Transactions;
