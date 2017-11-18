@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">

                        <table style="width:100%">
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Urgency</th>
                                <th>Type</th>
                                <th>Reference_id</th>
                                <th>Notes</th>
                                <th>Delete</th>
                            </tr>
                            @foreach($references as $reference)


                                    <tr>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->name) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->phone) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->address) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->urgency) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->type) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->referee_id) }}</td>
                                        <td style="margin-right:10px;margin-left:10px">{{ urldecode($reference->notes) }}</td>
                                        <td style="margin-right:10px;margin-left:10px"><form class="form-horizontal" method="post" action="/delete">
                                            {{ csrf_field() }}
                                            <input type="text" class="form-control" id="reference_id" value={{$reference->reference_id}} style="border:none;color:white">                                                  </form>
                                        </td>
                                        <td style="margin-right:10px;margin-left:10px"><button type="submit" class="btn btn-primary">Delete</button></td>
                                    </tr>
                            @endforeach
                        </table>

                    </div>

            </div>
        </div>
@endsection
