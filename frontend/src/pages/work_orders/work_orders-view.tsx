import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import {useAppDispatch, useAppSelector} from "../../stores/hooks";
import {useRouter} from "next/router";
import { fetch } from '../../stores/work_orders/work_ordersSlice'
import dataFormatter from '../../helpers/dataFormatter';
import LayoutAuthenticated from "../../layouts/Authenticated";
import {getPageTitle} from "../../config";
import SectionTitleLineWithButton from "../../components/SectionTitleLineWithButton";
import SectionMain from "../../components/SectionMain";
import CardBox from "../../components/CardBox";
import BaseButton from "../../components/BaseButton";
import BaseDivider from "../../components/BaseDivider";
import {mdiChartTimelineVariant} from "@mdi/js";
import {SwitchField} from "../../components/SwitchField";
import FormField from "../../components/FormField";

const Work_ordersView = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { work_orders } = useAppSelector((state) => state.work_orders)

    const { id } = router.query;

    function removeLastCharacter(str) {
      console.log(str,`str`)
      return str.slice(0, -1);
    }

    useEffect(() => {
        dispatch(fetch({ id }));
    }, [dispatch, id]);

    return (
      <>
          <Head>
              <title>{getPageTitle('View work_orders')}</title>
          </Head>
          <SectionMain>
            <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title={removeLastCharacter('View work_orders')} main>
                <BaseButton
                  color='info'
                  label='Edit'
                  href={`/work_orders/work_orders-edit/?id=${id}`}
                />
            </SectionTitleLineWithButton>
            <CardBox>

                <div className={'mb-4'}>
                    <p className={'block font-bold mb-2'}>OrderNumber</p>
                    <p>{work_orders?.order_number}</p>
                </div>

                <>
                    <p className={'block font-bold mb-2'}>Quality_control WorkOrder</p>
                    <CardBox
                      className='mb-6 border border-gray-300 rounded overflow-hidden'
                      hasTable
                    >
                        <div className='overflow-x-auto'>
                            <table>
                            <thead>
                            <tr>

                                <th>CheckPoint</th>

                                <th>Compliance</th>

                            </tr>
                            </thead>
                            <tbody>
                            {work_orders.quality_control_work_order && Array.isArray(work_orders.quality_control_work_order) &&
                              work_orders.quality_control_work_order.map((item: any) => (
                                <tr key={item.id} onClick={() => router.push(`/quality_control/quality_control-view/?id=${item.id}`)}>

                                    <td data-label="check_point">
                                        { item.check_point }
                                    </td>

                                    <td data-label="compliance">
                                        { dataFormatter.booleanFormatter(item.compliance) }
                                    </td>

                                </tr>
                              ))}
                            </tbody>
                        </table>
                        </div>
                        {!work_orders?.quality_control_work_order?.length && <div className={'text-center py-4'}>No data</div>}
                    </CardBox>
                </>

                <BaseDivider />

                <BaseButton
                    color='info'
                    label='Back'
                    onClick={() => router.push('/work_orders/work_orders-list')}
                />
              </CardBox>
          </SectionMain>
      </>
    );
};

Work_ordersView.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutAuthenticated>
          {page}
      </LayoutAuthenticated>
    )
}

export default Work_ordersView;
