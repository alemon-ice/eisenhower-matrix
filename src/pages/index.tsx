import { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import { FaExternalLinkAlt, FaSearch } from 'shared/utils/external-components'

import styles from 'shared/styles/Home.module.css'
import BoardModel from 'shared/models/Board'
import { IBoard } from 'shared/interfaces/board'
import { fetchBoardService } from 'shared/services/board.service'
import { ToastContainer, BiRefresh } from 'shared/utils/external-components'
import { Matrix } from 'shared/components/organisms'
import { ListSchedules, ListCards } from 'shared/components/molecules'

export default function Home() {
  const [board, setBoard] = useState<BoardModel>()
  const [refreshing, setRefreshing] = useState(false)

  function fetchBoard() {
    (async () => {
      const boardResponse: IBoard = await fetchBoardService()
      setBoard(new BoardModel(boardResponse))
    })()
  }

  function changeList(index: number) {
    setBoard(board.selectMatrixList(index))
  }

  function refresh() {
    (async () => {
      try {
        setRefreshing(true)
        fetchBoard()
      } catch (err) {
        console.error({ refreshError: err })
      } finally {
        setTimeout(() => {
          setRefreshing(false)
        }, 2000)
      }
    })()
  }

  const handleChangeList = useCallback(changeList, [board])
  const handleRefresh = useCallback(fetchBoard, [])

  useEffect(fetchBoard, [])

  if (!board)
    return (
      <div className={styles.main}>
        <FaSearch size={25} className={styles.loading} />
      </div>
    )

  return (
    <div className={styles.container}>
      <Head>
        <title>{board.getName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {`${board.getName} `}
          <a href={board.getUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt size={15} />
          </a>
        </h1>
        <span className={styles.quote}>
          O que é importante raramente é urgente e o que é urgente raramente é importante
        </span>
        <span className={styles.reference}>
          – Dwight Eisenhower, 34º Presidente Americano
        </span>

        <div className={styles.content}>
          <ListSchedules list={board.schedulesList} refresh={handleRefresh} />
          <Matrix lists={board.matrixList} handleChangeList={handleChangeList} />
          {board.selectedMatrixList ? (
            <ListCards list={board.selectedMatrixList} listIndex={board.selectedMatrixIndex} />
          ) : null}
        </div>

        <button className={styles.refreshButton} onClick={refresh} disabled={refreshing}>
          <BiRefresh className={refreshing && styles.refreshingPage} size={20} />
        </button>
      </main>
      <ToastContainer />
    </div>
  )
}
