const SENDLIST_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/sendList';
const SAVECONFIG_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/saveConfig';
const FLOWLIST_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/flowList';
const EXPORTSENDDETAIL_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/exportSendDetail';
const EXPORTFLOW_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/exportFlow';
const DELCONFIG_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/delConfig';
const UPDATESTATUS_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/updateStatus';
const CONFIGDETAIL_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/configDetail';
const CONFIGLIST_URL = ROUTE_PREFIX + '/docker_transit/actRedPackage/api/configList';


Vue.http.options.emulateJSOPN = true
Vue.http.options.headers = {
    'Content-Type': 'application/json'
}
var Main = {
    data() {
        return {
            btnChange:false,
            sureId:'',
            sureStatus:'',
            faillineText:'',
            diaLog:false,
            dataId:'',
            title: '新建活动',
            redPullTime01:'',
            redPullTime02:'',
            redPullTime03:'',
            // 默认当前页
            currentPage: 1,
            // 总数
            totalCount: 1000,
            // 
            pageSizes: [15],
            // 每页展示多少条
            PageSize: 15,

            // 默认当前页 01
            currentPage01: 1,
            // 总数
            totalCount01: 1000,
            // 
            pageSizes01: [5],
            // 每页展示多少条
            PageSize01: 5,

            // 默认当前页 02
            currentPage02: 1,
            // 总数
            totalCount02: 1000,
            // 
            pageSizes02: [5],
            // 每页展示多少条
            PageSize02: 5,

            table02Id:'',
            choiceDay: [],
            dayChoice: '近7日',
            redPullTime: [],
            fff: '',
            total02:{'package_num':'',
            'total_amount':'',
            'write_off_num':'',
            'write_off_amount':'',
            'subscribe_num':'',
            'unsubscribe_num':'',
            },
            total01:{'package_num':'',
                    'total_amount':'',
                    'write_off_num':'',
                    'write_off_amount':'',
                    'subscribe_num':'',
                    'unsubscribe_num':'',
                },
            select01: true,
            select02: false,
            bestWishes: true,
            value4: '',
            value1: [],
            value: '',
            radio1: '基本设置',
            activeName: '',
            minCash: '',
            maxCash: '',
            activeAll: '',
            maxPushCount: '',
            oneUserCount: '',
            oneUserMoney: '',
            oneDayCount: '',
            oneDayrMoney: '',
            splice: '1',
            splice02: '1',
            callBack: '1',
            activeBestWishes: '',
            redCallBack: '',
            overdueCallBack: '',
            getMaxMoney: '',
            failGetCallBack: '',
            getMaxCount: '',
            nowDayMax: '',
            activeBigMax: '',
            dialogFormVisible: false,
            dialogFormVisible02: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            flag01: true,
            flag02: false,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-06',
                name: '王小虎',
                city: '普陀区',
            }],
            tableData01: [{
                date: '2016-05-02',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-06',
                name: '王小虎',
                city: '普陀区',
            }],
            tableData02: [{
                date: '2016-05-02',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                city: '普陀区',
            }, {
                date: '2016-05-06',
                name: '王小虎',
                city: '普陀区',
            }]
        }
    },
    methods: {
        // 判断是否是数字
        isNumber(val) {
            var regPos = /^\d+(\.\d+)?$/; 
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; 
            if(regPos.test(val) || regNeg.test(val)) {
                return true;
                } else {
                return false;
                }
        },
        // 数字校验
        jiaoYan01(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'红包最小金额只能为数字,请重新填写'
                })
                this.minCash = ''
            }
        },
        jiaoYan02(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'红包最大金额只能为数字,请重新填写'
                })
                this.maxCash = ''
            }
        },
        jiaoYan03(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'活动总量只能为数字,请重新填写'
                })
                this.activeAll = ''
            }
        },
        jiaoYan04(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'活动每日最多发放只能为数字,请重新填写'
                })
                this.maxPushCount = ''
            }
        },
        jiaoYan05(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'共计个数只能为数字,请重新填写'
                })
                this.oneUserCount = ''
            }
        },
        jiaoYan06(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'共计金额只能为数字,请重新填写'
                })
                this.oneUserMoney = ''
            }
        },
        jiaoYan07(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'单日个数只能为数字,请重新填写'
                })
                this.oneDayCount = ''
            }
        },
        jiaoYan08(val){
            if(this.isNumber(val.target.value) == false){
                this.$message({
                    error:'error',
                    message:'单日金额只能为数字,请重新填写'
                })
                this.oneDayrMoney = ''
            }
        },
        // 公共方法，给时间添加0
        insertStr(source, start, newStr, n) {
            return source.slice(0, source.length - start) + newStr.slice(-start) + n
        },
        // 红包码过期 01
        outDate01(val){
            val == null ? val = '':''
            var n = val.length
            if (n >= 2){
                this.$message({
                    type:'error',
                    message:'只能选一个日期'
                })
                val.splice(1, n-1)
                this.value4 = val
                return
            }
            if (this.value != ""){
                if (this.value == null){
                    return
                }
                this.$message({
                    type:'warnning',
                    message:'过期方式只能选一个'
                })
                this.value4 = []
            }
        },
        // 红包码过期 02
        outDate02(){
            try {
                if (this.value4.length != 0 ){
                    if (this.value4 == []){
                        return
                    }
                    this.$message({
                        type:'warnning',
                        message:'过期方式只能选一个'
                    })
                    this.value = ''
                }
            } catch (error) {
                
            }
            
        },
        // 确定
        sure() {
            try {
                if (this.value1[0].length == 9) {
                    var n = this.value1[0].charAt(8)
                    this.value1[0] = this.insertStr(this.value1[0], 1, '0', n)
                }
                if (this.value1[1].length == 9) {
                    var n = this.value1[1].charAt(8)
                    this.value1[1] = this.insertStr(this.value1[1], 1, '0', n)
                }
            } catch (error) {
            }
            try {
                if (this.activeName == '' || this.activeName == null){
                    this.$message({
                        type:'warnning',
                        message:'警告，活动名称处不能为空'
                    })
                    return
                }
                if (this.value1 == null || this.value1 == [] || this.value1[0] == undefined){
                    this.$message({
                        type:'warnning',
                        message:'警告，活动时间处不能为空'
                    })
                    return
                }
                if (this.minCash == '' && this.maxCash == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，红包金额处不能为空'
                    })
                    return
                }
                if (this.minCash == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，红包金额最小值处不能为空'
                    })
                    return
                }
                if (this.maxCash == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，红包金额最大值处不能为空'
                    })
                    return
                }
                if (this.activeAll == '' || this.maxPushCount == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，活动总量处不能为空'
                    })
                    return
                }
                if (this.oneUserCount == '' || this.oneUserMoney == '' || this.oneDayCount == '' || this.oneDayrMoneyc == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，单用户最多可领处不能为空'
                    })
                    return
                }
                if (this.splice == '' || this.splice02 == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，特殊设置选择处不能为空'
                    })
                    return
                }
                if (this.activeBestWishes == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，活动祝语处不能为空'
                    })
                    return
                }
                if (this.overdueCallBack == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，红包过期处不能为空'
                    })
                    return
                }
                if (this.failGetCallBack == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，领取失败处不能为空'
                    })
                    return
                }
                if (this.getMaxMoney == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，用户领取金额处不能为空'
                    })
                    return
                }
                if (this.getMaxCount == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，用户领取个数处不能为空'
                    })
                    return
                }
                if (this.nowDayMax == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，单日活动达到上限回复处不能为空'
                    })
                    return
                }
                if (this.activeBigMax == ''){
                    this.$message({
                        type:'warnning',
                        message:'警告，活动达到上限处不能为空'
                    })
                    return
                }
            } catch (error) {
                
            }
            var type
            try {
                if (this.value4 != [] && this.value == ''){
                    type = 1
                } else if ( this.value4 != [] && this.value == null){
                    type = 1
                } else if ( this.value4.length != 0 && this.value != ''){
                    type = 1
                } else if ( this.value4.length != 0 && this.value != null){
                    type = 1
                } else if ( this.value4.length == 0 && this.value != null){
                    type = 2
                } else if ( this.value4 == [] && this.value != null){
                    type = 2
                }else if ( this.value4.length == 0 && this.value != ''){
                    type = 2
                } else if ( this.value4 == [] && this.value != ''){
                    type = 2
                }
            } catch (error) {
                if (this.value4 == null){
                    type = 2
                } else {
                    type = 1
                }
            }
			this.value4 == null ? this.value4 = '':''
            this.$http.post(SAVECONFIG_URL, {
                // int
                actId: this.actId,
                actName: this.activeName,
                beginTime: this.value1[0],
                endTime: this.value1[1],
                // status:'',
                // int
                expireType: type,
                expireTime: this.value4[0],
                // 红包吗过期XXX小时
                expireDuration:parseInt(this.value),
                upperAmount: this.maxCash,
                lowerAmount: this.minCash,
                totalAmount: this.activeAll,
                dailyLimit: this.maxPushCount,
                singleTotalNum: this.oneUserCount,
                singleTotalAmount: this.oneUserMoney,
                singleDailyNum: this.oneDayCount,
                singleDailyAmount: this.oneDayrMoney,
                // int 用户只能领取一个userid红包
                useridLimit: parseInt(this.splice),
                // int 领取失败再次领取 0/1
                receiveAgain: parseInt(this.splice02),
                congratulation: this.activeBestWishes,
                // int 发送红包回复 0/1
                sendReplyConfig: parseInt(this.callBack),
                sendReply: this.redCallBack,
                expireReply: this.overdueCallBack,
                failReceiveReply: this.failGetCallBack,
                amountLimitReply: this.getMaxMoney,
                numLimitReply: this.getMaxCount,
                dailyActLimitReply: this.nowDayMax,
                actLimitReply: this.activeBigMax,
            }).then(function (res) {
                try {
                    this.dialogFormVisible = false
                    if (res.status == 200) {
                        this.$message({
                            type: 'success',
                            message: '创建成功'
                        });
                    } else {
                        this.$message({
                            type: 'warning',
                            maessage: '创建失败，请检查'
                        })
                    }
                } catch (error) {
                    
                }
                
            }, function (reason) { this.$message({ type: 'error', message: '创建失败，请检查' }) })
            setTimeout(()=>{
                window.location.reload()
            }, 1300)
        },
        handleSizeChange(val) {
            this.PageSize = val
            this.currentPage = 1
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.$http.get(CONFIGLIST_URL, { params: { pageNo: val, pageSize: 15 } }).then(function (res) {
                try {
                    var v = res.body.detailMsg.list
                    v.length == 0 ? (()=>{
                        return
                    })() : v = v 
                    this.totalCount = res.body.detailMsg.count
                    var tableData = []
                    // for (var i = 0; i < v.length; i++) {
                    //     tableData.push(v[i])
                    // }
                    tableData = v
                    this.tableData = tableData
                    // this.$set(this.tableData, 1, )
                    for (var j = 0; j < this.tableData.length; j++) {
                        this.tableData[j]['newTime'] = ' 从 ' + this.tableData[j].beginTime + ' 至 ' + this.tableData[j].endTime
                        if (this.tableData[j].status == false) {
                            this.tableData[j].status = true
                            this.tableData[j].status02 = false
                        } else if (this.tableData[j].status == true) {
                            this.tableData[j].status = false
                            this.tableData[j].status02 = true
                        }
                    }
                    // this.currentPage = val
                } catch (error) {
                    
                }
                
            }, function (reason) { console.log(reason) })
        },
        handleSizeChange01(val) {
            this.PageSize = val
            this.currentPage = 1
        },
        handleCurrentChange01(val) {
            this.currentPage = val
            this.$http.get(SENDLIST_URL,{
                params:{
                    beginDate:this.redPullTime[0],
                    endDate:this.redPullTime[1],
                    actId:this.dataId,
                    pageNo:val,
                    pageSize:5,
                }
            }).then(function(res){
                try {
                    var e = res.body.detailMsg.list
                    if(e.length == 0){
                        return
                    }
                    this.tableData01 = e
                    this.totalCount01 = res.body.detailMsg.count
                } catch (error) {
                    
                }
                
            },function(reason){
                this.$message({
                    type:'error',
                    message:"错误，表格1数据请求出了点问题"
                })
            })
        },
        handleSizeChange02(val) {
            this.PageSize = val
            this.currentPage = 1
        },
        handleCurrentChange02(val) {
            this.currentPage = val
            // 第二章表格
            this.$http.get(FLOWLIST_URL,{
                params:{
                    date:this.choiceDay[0],
                    actId:this.dataId,
                    pageNo:val,
                    pageSize:5,
                }
            }).then(function(res){
                try {
                    var e = res.body.detailMsg.list
                    if(e.length == 0){
                        return
                    }
                    this.tableData02 = e
                    this.totalCount02 = res.body.detailMsg.count
                } catch (error) {
                    
                }
                
            },function(reason){
                this.$message({
                    type:'error',
                    message:"错误，表格1数据请求出了点问题"
                })
            })
        },
        twoDigits(val) {
            if (val < 10) return "0" + val;
            return val;
        },
        // 表01  时间请求
        timeChoice01(time){
            this.redPullTime == null ? this.redPullTime = ['-','-'] : this.redPullTime = this.redPullTime
            if(time == null){
                time = []
                time[0] = '-'
                time[1] = '-'
            }
            if (time != null){
                this.redPullTime01 = time[0]
                this.redPullTime02 = time[1]
            }
            try {
                this.$http.get(SENDLIST_URL,{
                    params:{
                        beginDate:time[0],
                        endDate:time[1],
                        actId:this.dataId,
                        pageNo:1,
                        pageSize:5,
                    }
                }).then(function(res){
                    try {
                        var e = res.body.detailMsg.list
                        if(e.length == 0){
                            return
                        }
                        this.tableData01 = e
                        this.totalCount01 = res.body.detailMsg.count
                        this.total01 = res.body.detailMsg.total
                    } catch (error) {
                        
                    }
                },function(reason){
                    this.$message({
                        type:'error',
                        message:"错误，表格1数据请求出了点问题"
                    })
                })
            } catch (error) {
                
            }
            
        },
        // 表02  时间请求
        timeChoice02(time){
            if (time != null){
                this.redPullTime03 = time[0]
            }
            try {
                var n = time.length
                if (n >= 2){
                    this.$message({
                        type:'error',
                        message:'只能选一个日期'
                    })
                    time.splice(1, n-1)
                    this.choiceDay = time
                }
                this.choiceDay == null ? this.choiceDay = [] : ''
            } catch (error) {
                
            }
            
            try {
                // 第二章表格
                this.$http.get(FLOWLIST_URL,{
                    params:{
                        date:time[0],
                        actId:this.dataId,
                        pageNo:1,
                        pageSize:5,
                    }
                }).then(function(res){
                    try {
                        var e = res.body.detailMsg.list
                        if(e.length == 0){
                            return
                        }
                        this.tableData02 = e
                        this.totalCount02 = res.body.detailMsg.count
                        this.total02 = res.body.detailMsg.total
                    } catch (error) {
                        
                    }
                },function(reason){
                    this.$message({
                        type:'error',
                        message:"错误，表格1数据请求出了点问题"
                    })
                })
            } catch (error) {
                
            }
            
        },
        // 快捷时间选择
        quickTime(d) {
            this.redPullTime = []
            var end = new Date()
                , start = new Date();
            if (d == '近7日') {
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                start = start.getFullYear() + "-" + this.twoDigits(start.getMonth() + 1) + "-" + start.getDate();
                end = end.getFullYear() + "-" + this.twoDigits(end.getMonth() + 1) + "-" + end.getDate();
                this.redPullTime.push(start)
                this.redPullTime.push(end)
            }
            if (d == '近15日') {
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 15);
                start = start.getFullYear() + "-" + this.twoDigits(start.getMonth() + 1) + "-" + start.getDate();
                end = end.getFullYear() + "-" + this.twoDigits(end.getMonth() + 1) + "-" + end.getDate();
                this.redPullTime.push(start)
                this.redPullTime.push(end)
            }
            if (d == '近30日') {
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                start = start.getFullYear() + "-" + this.twoDigits(start.getMonth() + 1) + "-" + start.getDate();
                end = end.getFullYear() + "-" + this.twoDigits(end.getMonth() + 1) + "-" + end.getDate();
                this.redPullTime.push(start)
                this.redPullTime.push(end)
            }
            try {
                if (this.redPullTime[0].length == 9) {
                    var n = this.redPullTime[0].charAt(8)
                    this.redPullTime[0] = this.insertStr(this.redPullTime[0], 1, '0', n)
                }
                if (this.redPullTime[1].length == 9) {
                    var n = this.redPullTime[1].charAt(8)
                    this.redPullTime[1] = this.insertStr(this.redPullTime[1], 1, '0', n)
                }
            } catch (error) {
            }
            // 第一张表格
            this.$http.get(SENDLIST_URL,{
                params:{
                    beginDate:this.redPullTime[0],
                    endDate:this.redPullTime[1],
                    actId:this.dataId,
                    pageNo:1,
                    pageSize:5,
                }
            }).then(function(res){
                try {
                    var e = res.body.detailMsg.list
                    if(e.length == 0){
                        return
                    }
                    this.tableData01 = e
                    this.totalCount01 = res.body.detailMsg.count
                    this.total01 = res.body.detailMsg.total 
                } catch (error) {
                    
                }
                
            },function(reason){
                this.$message({
                    type:'error',
                    message:"错误，表格1数据请求出了点问题"
                })
            })
            this.choiceDay = []
            this.choiceDay.push(end)
            try {
                if (this.choiceDay[0].length == 9) {
                    var n = this.choiceDay[0].charAt(8)
                    this.choiceDay[0] = this.insertStr(this.choiceDay[0], 1, '0', n)
                }
            } catch (error) {
            }
        },
        // 基本设置和文案设置
        checkedChange(checkedChange) {
            setTimeout(() => {
                if (checkedChange == '基本设置') {
                    document.getElementById('select01').style.display = 'block'
                    document.getElementById('select02').style.display = 'none'
                    document.getElementsByClassName('el-dialog__footer')[0].style.display = 'none'
                }
                if (checkedChange == '文案设置') {
                    document.getElementById('select01').style.display = 'none'
                    document.getElementById('select02').style.display = 'block'
                    document.getElementsByClassName('el-dialog__footer')[0].style.display = 'block'
                }
            }, 300);
        },
        // 文案设置-活动祝福
        call(e) {
            if (e == '1') {
                this.bestWishes = true
            } else if (e == '0') {
                this.bestWishes = false
            }
        },
        // 表格数据下载
        downLoad01(){
            this.$http.get(EXPORTSENDDETAIL_URL, {
                params:{
                    beginDate:this.redPullTime[0],
                    endDate:this.redPullTime[1],
                    actId:this.dataId,
                }
            }).then(function(res){
                try {
                    window.location.href = res.url
                } catch (error) {
                    
                }
            },function(res){
                this.$message({
                    type:"error",
                    message:'下载失败'
                })
            })
        },
        downLoad02(){
            this.$http.get(EXPORTFLOW_URL, {
                params:{
                    date:this.choiceDay[0],
                    actId:this.dataId,
                }
            }).then(function(res){
                try {
                    window.location.href = res.url
                } catch (error) {
                    
                }
            },function(res){
                this.$message({
                    type:"error",
                    message:'下载失败'
                })
            })
        },
        // 删除
        deleteRow(index, rows, row) {
            this.$http.get(DELCONFIG_URL, {
                params:{
                    actId:row.actId
                } 
            }).then(function (res) {
                try {
                    this.$confirm('您正在删除该活动，请三思三思再三思~', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        try {
                            if (row.actId == '' || row.actId == undefined){
                                this.$message({
                                    type:'error',
                                    message:'错误，删除失败'
                                })
                                return
                            } 
                            this.$message({
                                type:'success',
                                message:'成功删除'
                            })
                            rows.splice(index, 1);
                        } catch (error) {
                            
                        }
                        
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                } catch (error) {
                    
                }
                
            }, function (reason) { 
                this.$message({
                    type:'error',
                    message:'错误，删除失败'
                })                
            })
        },
        // 发布
        publish(index, tab, ev) {
            this.$http.get(UPDATESTATUS_URL, {
                params:{
                    actId:ev.actId,
                    status:ev.status,
                }
            }).then(function(res){
                try {
                    this.$confirm('您正在发布活动配置，请三思三思再三思~', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        ev.status = !ev.status
                        ev.status02 = !ev.status02
                        this.$message({
                            type: 'success',
                            message: '发布成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消发布'
                        });
                    });
                } catch (error) {
                    
                }
                setTimeout(()=>{
                    window.location.reload()
                }, 1300)
            },function(reason){
                this.$message({
                    type:"error",
                    message:'没数据，请查看请求是否合理'
                })
            })
        },
        // 下线
        failOnline(index, tab, ev) {
            this.faillineText = ''
            this.sureId = ev.actId
            this.sureStatus = ev.status
            this.$http.get(UPDATESTATUS_URL,{
                params:{
                    actId:ev.actId,
                    status:ev.status,
                }
            }).then(function(res){
                setTimeout(()=>{
                    window.location.reload()
                }, 1300)
            },function(reason){
                this.$message({
                    type:"error",
                    message:"没数据请查看请求是否合理"
                })
            })
            this.diaLog = true
        },
        sureFail(){
            this.faillineText == null ? this.faillineText = '':''
            if (this.faillineText == ''){
                this.$message({
                    type:'error',
                    message:'请输入内容后再提交'
                })
                return
            }
            this.$http.get(UPDATESTATUS_URL,{
                params:{
                    actId:this.sureId,
                    status:this.sureStatus,
                    offineReturn:this.faillineText,
                }
            }).then(function(){
                this.$message({
                    type:'success',
                    message:'提交成功'
                })
            },function(res){
                this.$message({
                    type:'error',
                    message:'提交失败'
                })
            })
            this.diaLog = false
        },
        // input重置
        clearInputText() {
            try {
                this.activeName = '',
                    this.value1 = [],
                    // status:'',
                    // int
                    this.value4 = [],
                    // 红包吗过期XXX小时
                    this.value = '',
                    this.maxCash = '',
                    this.minCash = '',
                    this.activeAll = '',
                    this.maxPushCount = '',
                    this.oneUserCount = '',
                    this.oneUserMoney = '',
                    this.oneDayCount = '',
                    this.oneDayrMoney = '',
                    // int 用户只能领取一个userid红包
                    this.splice = '1',
                    // int 领取失败再次领取 0/1
                    this.splice02 = '1',
                    this.activeBestWishes = '',
                    // int 发送红包回复 0/1
                    this.callBack = '1',
                    this.redCallBack = '',
                    this.overdueCallBack = '',
                    this.failGetCallBack = '',
                    this.getMaxMoney = '',
                    this.getMaxCount = '',
                    this.nowDayMax = '',
                    this.activeBigMax = ''
            } catch (error) {
                console.log(error)
            }
        },
        // 新建活动
        newActive() {
            this.dialogFormVisible = true
            document.getElementsByClassName('el-dialog__footer')[0].style.display = 'none'
            this.radio1 = '基本设置'
            this.clearInputText()
            this.checkedChange(this.radio1)
            this.title = '新建活动'
            this.actId = ''
            this.value4 == null ? this.value4 = '':''
            if (this.callBack == 1){
                this.bestWishes = true
            } else if (this.callBack == 0){
                this.bestWishes = false
            }
        },
        // 编辑
        edit(row) {
            this.$http.get(CONFIGDETAIL_URL, {
                params: {
                    actId: row.actId,
                }
            }).then(function (res) {
                if (res.status == 200) {
                    try {
                        var e = res.body.detailMsg.detail
                        if(e.length == 0){
                            return
                        }
                        this.actId = e.actId 
                        this.activeName = e.actName
                        this.value1.push(e.beginTime)
                        this.value1.push(e.endTime)
                        this.value4 = e.expireTime
                        this.value = e.expireDuration
                        this.minCash = e.lowerAmount
                        this.maxCash = e.upperAmount
                        this.activeAll = e.totalAmount
                        this.maxPushCount = e.dailyLimit
                        this.oneUserCount = e.singleTotalNum
                        this.oneUserMoney = e.singleTotalAmount
                        this.oneDayCount = e.singleDailyNum
                        this.oneDayrMoney = e.singleDailyAmount
                        this.splice = e.useridLimit.toString()
                        this.splice02 = e.receiveAgain.toString()
                        this.activeBestWishes = e.congratulation
                        this.callBack = e.sendReplyConfig.toString()
                        this.redCallBack = e.sendReply
                        this.overdueCallBack = e.expireReply
                        this.failGetCallBack = e.failReceiveReply
                        this.getMaxMoney = e.amountLimitReply
                        this.getMaxCount = e.numLimitReply
                        this.nowDayMax = e.dailyActLimitReply
                        this.activeBigMax = e.actLimitReply
                        if (e.sendReplyConfig.toString() == "1"){
                            this.bestWishes = true
                        } else if (e.sendReplyConfig.toString() == "0"){
                            this.bestWishes = false
                        }
                    } catch (error) {
                        this.$message({
                            type: 'error',
                            message: '数据填充失败，请查看接口'
                        })
                    }
                } else {
                    this.$message({
                        type: 'warning',
                        message: '数据填充失败，请查看接口'
                    })
                }
                setTimeout(()=>{
                    window.location.reload()
                }, 1300)
            }, function (reason) {
                this.$message({
                    type: 'warning',
                    message: '数据填充失败,请查看接口'
                })
             })
            this.value4 == null ? this.value4 = '' : ''
            this.dialogFormVisible = true
            document.getElementsByClassName('el-dialog__footer')[0].style.display = 'none'
            this.radio1 = '基本设置'
            this.clearInputText()
            this.checkedChange(this.radio1)
            this.title = '编辑活动'
        },
        // 数据
        handleClick(row) {
            this.dataId = row.actId
            this.dialogFormVisible02 = true
            this.redPullTime = []
            try {
                this.dayChoice = '近7日'
                this.redPullTime = []
                var end = new Date()
                    , start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                start = start.getFullYear() + "-" + this.twoDigits(start.getMonth() + 1) + "-" + start.getDate();
                end = end.getFullYear() + "-" + this.twoDigits(end.getMonth() + 1) + "-" + end.getDate();
                this.redPullTime01 = start
                this.redPullTime02 = start
                this.redPullTime.push(start)
                this.redPullTime.push(end)
            } catch (error) {
                console.log(error)
            }
            try {
                if (this.this.redPullTime01.length == 9) {
                    var n = this.redPullTime01.charAt(8)
                    this.this.redPullTime01 = this.insertStr(this.this.redPullTime01, 1, '0', n)
                }
                if (this.redPullTime02.length == 9) {
                    var n = this.redPullTime02.charAt(8)
                    this.redPullTime02 = this.insertStr(this.redPullTime02, 1, '0', n)
                }
            } catch (error) {
            }
            this.redPullTime == null ? this.redPullTime = [] : ''
            // 第一张表格
            this.$http.get(SENDLIST_URL,{
                params:{
                    beginDate:this.redPullTime01,
                    endDate:this.redPullTime02,
                    actId:row.actId,
                    pageNo:1,
                    pageSize:3,
                }
            }).then(function(res){
                try {
                    var e = res.body.detailMsg.list
                    if(e.length == 0){
                        return
                    }
                    this.tableData01 = e
                    this.totalCount01 = res.body.detailMsg.count
                    this.total01 = res.body.detailMsg.total
                } catch (error) {
                    
                }
                
            },function(reason){
                this.$message({
                    type:'error',
                    message:"错误，表格1数据请求出了点问题"
                })
            })
            this.choiceDay = []
            this.redPullTime03 = end
            this.choiceDay.push(end)
            try {
                if (this.choiceDay[0].length == 9) {
                    var n = this.choiceDay[0].charAt(8)
                    this.choiceDay[0] = this.insertStr(this.choiceDay[0], 1, '0', n)
                }
            } catch (error) {
            }
            this.choiceDay == null ? this.choiceDay = [] : ''
            // 第二章表格
            this.$http.get(FLOWLIST_URL,{
                params:{
                    date:this.redPullTime03,
                    actId:row.actId,
                    pageNo:1,
                    pageSize:3,
                }
            }).then(function(res){
                try {
                    var e = res.body.detailMsg.list
                    if(e.length == 0){
                        return
                    }
                    this.tableData02 = e
                    this.totalCount02 = res.body.detailMsg.count
                    this.total02 = res.body.detailMsg.total
                } catch (error) {
                    
                }
                
            },function(reason){
                this.$message({
                    type:'error',
                    message:"错误，表格1数据请求出了点问题"
                })
            })
        },
        // 默认刷新
        autoWriteText() {
            this.$http.get(CONFIGLIST_URL, { params: { pageNo: 1, pageSize: 15 } }).then(function (res) {
                try {
                    var v = res.body.detailMsg.list
                    v.length == 0 ? (()=>{
                        return
                    })() : v = v 
                    this.totalCount = res.body.detailMsg.count
                    this.tableData = []
                    for (var i = 0; i < v.length; i++) {
                        this.tableData.push(v[i])
                    }
                    for (var j = 0; j < this.tableData.length; j++) {
                        this.tableData[j]['newTime'] = ' 从 ' + this.tableData[j].beginTime + ' 至 ' + this.tableData[j].endTime
                        if (this.tableData[j].status == false) {
                            this.tableData[j].status = true
                            this.tableData[j].status02 = false
                        } else if (this.tableData[j].status == true) {
                            this.tableData[j].status = false
                            this.tableData[j].status02 = true
                        }
                    }
                } catch (error) {
                    
                }
                
            }, function (reason) { console.log(reason) })
        }
    },
    created: function () {
        this.autoWriteText()
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')